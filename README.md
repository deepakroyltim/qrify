# QRify
QRify is a Node.js application that allows users to generate QR codes for website URLs and store them in a MongoDB database. It provides a simple RESTful API to create and retrieve QR codes, making it ideal for marketing, sharing links, or personal use.

## 🚀 Features
  - Generate QR codes from URLs
  - Store original URLs and QR code data in MongoDB
  - Serve QR codes via HTTP
  - RESTful API for easy integration
 
## 🛠 Technologies Used
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - QRCode npm package
  - dotenv for environment configuration
  - nodemon for development

## 📦 Installation
##### Clone the repository:
```
git clone https://github.com/yourusername/qrify.git
cd qrify
```

##### Install dependencies:
```

npm install

```

##### Create a .env file in the root directory:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/qrify
```

##### Start the server:
```

npm run dev

```

## 📌 Usage
Generate a QR Code
#### Send a GET request to:
```

/generateqr?url=https://example.com

```

#### Response:
  - A QR code image embedded in HTML
  - The original URL and QR code data saved in MongoDB

## 📂 API Endpoints

| Method | Endpoint       | Description                 |
|--------|----------------|-----------------------------|
| GET    | `/`            | Health check                |
| GET    | `/generateqr`  | Generate and store QR code  |




