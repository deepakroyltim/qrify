import { Router } from "express";
import Url from "../Model/Url.js";
import QRCode from "qrcode";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Server is up and running." });
});

router.get("/generateqr", async (req, res) => {
  const { url } = req.query;

  if (!url) {
    res.status(400).json({ error: "URL is required" });
  }

  try {
    const qrDataUrl = await QRCode.toDataURL(url);
    await Url.create({
      originalUrl: url,
      shortCode: qrDataUrl,
      type: "qrCode",
    });

    res.send(`<img src="${qrDataUrl}" alt="QR Code" />`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }

  res.json({ URL: qrDataUrl });
});

export default router;
