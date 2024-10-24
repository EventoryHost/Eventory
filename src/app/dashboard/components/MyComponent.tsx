import { useEffect, useState } from "react";

interface Metadata {
  ContentLength: number;
  ContentType: string;
  LastModified: string;
  Metadata: Record<string, string>; // Assuming metadata is a key-value object
}

const MyComponent: React.FC = () => {
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileNames, setFileNames] = useState<string[]>([]);

  // S3 URL for the file you want to get metadata from
  const s3Url =
    "https://eventory-bucket.s3.ap-south-1.amazonaws.com/Venues/harshi/documents/cancellation_policy";

  // Extract the object key from the S3 URL
  const getObjectKeyFromUrl = (url: string) => {
    const urlParts = new URL(url);
    const key = urlParts.pathname.slice(1); // Remove the leading slash
    return key;
  };

  useEffect(() => {
    const fetchMetadata = async () => {
      const objectKey = getObjectKeyFromUrl(s3Url); // Get the object key from the URL

      try {
        const response = await fetch(`/api/getMetadata?key=${objectKey}`);

        if (!response.ok) {
          throw new Error("Failed to fetch metadata");
        }
        const data: Metadata = await response.json();
        setMetadata(data);
      } catch (err) {
        return Error;
      }
    };

    fetchMetadata();
  }, []);

  return (
    <div>
      {metadata && (
        <div>
          <p>Content Length: {metadata.ContentLength / 1024}</p>
          <p>Content Type: {metadata.ContentType}</p>
          <p>Last Modified: {new Date(metadata.LastModified).toString()}</p>
          <pre>
            Custom Metadata: {JSON.stringify(metadata.Metadata, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
