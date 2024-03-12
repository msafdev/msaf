import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (imgPath: string) => {
  try {
    // Fetch the image from the provided URL
    const response = await fetch(imgPath);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    // Read the image data as a blob
    const imageData = await response.blob();

    // Convert the Blob object to a Buffer object
    const buffer = await blobToBuffer(imageData);

    // Convert the buffer to base64 using plaiceholder library
    const { base64 } = await getPlaiceholder(buffer);

    return base64;
  } catch (error) {
    return error instanceof Error ? error.message : "Unexpected error!";
  }
};

// Function to convert Blob to Buffer
const blobToBuffer = async (blob: Blob): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const buffer = Buffer.from(reader.result as ArrayBuffer);
      resolve(buffer);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(blob);
  });
};
