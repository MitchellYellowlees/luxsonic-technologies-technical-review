# Luxsonic Technologies Technical Review

This project is a website that allows users to login securely to access a dashboard, create records/entries that are submitted to a database using a web form, and be able to export those entries to a file that can be stored locally on a device.

## Starting the Frontend
**Important** The frontend will not run properly if you do not have the '.env' file within your client folder. The '.env' file is not pushed to the repo due to the sensitive Auth0 config information. If you require access to the .env file please contact Mitchell.
To start the frontend, cd into the client folder and install the npm modules using the command:

'npm install'

Then run the application with

'npm start'

Finally, open your preferred browser and go to http://localhost:3000

## Starting the Backend
**Important:** The backend will not run if you do not have the '.env' file within the backend folder. The '.env' file is not pushed to the repo due to it's sensitive config info. If you require access to the .env file please contact Mitchell. 

To start the backend, cd into the backend folder and install the npm modules using these commands:

'npm install express'

'npm install cors'

'npm install mongoose'

'npm install dotenv'

'npm install sinon'

Then run the application with:

'node server'

Finally open your preferred browser and go to http://localhost:5000

## Further Information
For details of the design process please visit the [wiki](https://github.com/MitchellYellowlees/luxsonic-technologies-technical-review/wiki).
