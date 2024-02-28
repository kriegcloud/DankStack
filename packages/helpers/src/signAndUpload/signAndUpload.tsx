import { uploadToS3 } from '../uploadToS3';

interface signAndUploadProps {
  filePath: string;
  file: File;
}

async function signAndUpload({ filePath, file }: signAndUploadProps) {
  try {
    const signedUrl = await fetch(`/api/presign-url?filePath=${filePath}`, {
      method: 'GET',
    });

    const json = await signedUrl.json();

    if (signedUrl.status === 200) {
      return await uploadToS3({
        filePath: filePath,
        fileContents: file,
        preSignedUrl: json.preSignedUrl,
      });
    } else {
      console.log('error signing url');
    }
  } catch (err) {
    console.log(err);
  }
}

export default signAndUpload;
