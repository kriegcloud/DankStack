import axios from "axios";

interface uploadToS3Props {
  filePath: string;
  fileContents: File;
  preSignedUrl: string;
}

const uploadToS3 = async ({
  filePath,
  fileContents,
  preSignedUrl,
}: uploadToS3Props) => {
  const formData = new FormData();
  formData.append("file", fileContents);

  const response = await axios.put(preSignedUrl, fileContents, {
    method: "PUT",
  });
  console.log(response.status);

  if (response.status === 200) {
    return `https://assets.rocketinventory.com/${filePath}`;
  } else {
    return "error";
  }
};

export default uploadToS3;
