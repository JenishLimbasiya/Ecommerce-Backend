import multer, { StorageEngine } from "multer";
import { Request } from "express";
import fs from "fs";

interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

const storage: StorageEngine = multer.diskStorage({
  destination: function (
    req: Request,
    file: MulterFile,
    cb: (error: Error | null, destination: string) => void
  ) {
    const dir = "./source/public/temp";

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  },
  filename: function (
    req: Request,
    file: MulterFile,
    cb: (error: Error | null, filename: string) => void
  ) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

export const upload = multer({ storage });
