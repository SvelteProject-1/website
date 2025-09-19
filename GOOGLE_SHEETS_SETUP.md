# Google Sheets Integration Setup Guide

## Option 1: Google Apps Script (Recommended - Easiest)

### Step 1: Create Google Spreadsheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Form Submissions" or similar
4. Set up column headers in row 1:
   - A1: Name
   - B1: Email
   - C1: Contact No
   - D1: Timestamp

### Step 2: Create Google Apps Script
1. In your spreadsheet, go to `Extensions` > `Apps Script`
2. Delete the default code and replace with:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Add data to the sheet
    sheet.appendRow([
      data.name,
      data.email,
      data.contactNo,
      data.timestamp || new Date().toISOString()
    ]);
    
    return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    console.error('Error:', error);
    return ContentService.createTextOutput('Error: ' + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}
```

3. Save the script (Ctrl+S or Cmd+S)
4. Name it "Form Handler" or similar

### Step 3: Deploy as Web App
1. Click `Deploy` > `New deployment`
2. Click the gear icon ⚙️ next to "Type" and select "Web app"
3. Fill in the details:
   - **Description**: "Form Submission Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click `Deploy`
5. **IMPORTANT**: Copy the Web App URL that appears after deployment

### Step 4: Configure Environment Variables
1. Create a `.env` file in your project root
2. Add the following line:
```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
```
Replace `YOUR_ACTUAL_SCRIPT_ID` with the actual ID from your deployed script URL.

### Step 5: Test the Integration
1. Start your development server: `npm run dev`
2. Open your form and submit test data
3. Check your Google Sheet to see if the data appears

## Option 2: Google Sheets API (Advanced)

If you prefer using the official Google Sheets API:

### Step 1: Enable Google Sheets API
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the Google Sheets API
4. Create credentials (API Key or Service Account)

### Step 2: Install Dependencies
```bash
npm install googleapis
```

### Step 3: Use the API
The server endpoint is already set up to handle both methods. Just update the environment variables accordingly.

## Troubleshooting

### Common Issues:
1. **CORS Error**: Make sure your Google Apps Script is deployed with "Anyone" access
2. **Script URL Not Working**: Ensure you copied the correct Web App URL (not the script editor URL)
3. **Data Not Appearing**: Check the Google Apps Script logs in the Apps Script editor
4. **Environment Variables**: Make sure your `.env` file is in the project root and restart your dev server

### Testing:
- Use browser developer tools to check network requests
- Check the Google Apps Script execution logs
- Verify the spreadsheet has the correct column headers

## Security Notes:
- The Google Apps Script method is suitable for most use cases
- For production apps with sensitive data, consider using Google Sheets API with proper authentication
- Never commit your `.env` file to version control

