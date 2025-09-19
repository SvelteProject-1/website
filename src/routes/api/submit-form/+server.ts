import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const formData = await request.json();
		
		// Validate required fields
		if (!formData.name || !formData.email || !formData.contactNo) {
			return json({ success: false, error: 'Missing required fields' }, { status: 400 });
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			return json({ success: false, error: 'Invalid email format' }, { status: 400 });
		}

		// Get Google Apps Script URL from environment variables
		const googleScriptUrl = "https://script.google.com/macros/s/AKfycbxrGnE3VAf23sNoU7zcJu6I5tpbCmXYdcSr0B5fi-1XMPlDAW4BpUU7gz_1hNaedVM/exec";
		
		// Debug logging
		console.log('Environment variables check:');
		console.log('GOOGLE_SCRIPT_URL:', googleScriptUrl ? 'Set' : 'Not set');
		console.log('All env vars:', Object.keys(process.env).filter(key => key.includes('GOOGLE')));
		
		if (!googleScriptUrl) {
			console.error('GOOGLE_SCRIPT_URL environment variable not set');
			console.error('Available environment variables:', Object.keys(process.env));
			return json({ success: false, error: 'Server configuration error - GOOGLE_SCRIPT_URL not found' }, { status: 500 });
		}

		// Send data to Google Apps Script
		const response = await fetch(googleScriptUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: formData.name,
				email: formData.email,
				contactNo: formData.contactNo,
				timestamp: new Date().toISOString()
			})
		});

		if (!response.ok) {
			throw new Error(`Google Script responded with status: ${response.status}`);
		}

		const result = await response.text();
		
		if (result === 'Success') {
			return json({ success: true, message: 'Form submitted successfully' });
		} else {
			throw new Error('Unexpected response from Google Script');
		}

	} catch (error) {
		console.error('Form submission error:', error);
		return json(
			{ success: false, error: 'Failed to submit form. Please try again.' },
			{ status: 500 }
		);
	}
};
