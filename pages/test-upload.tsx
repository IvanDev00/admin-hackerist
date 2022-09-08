import React, { useState } from "react";
import useFirebaseUploader from "hooks/useFirebaseUploader";

export default function TestUpload() {
  const [data, setData] = useState("");
  const [uploadProfileCoverFile] = useFirebaseUploader("profile-cover");

  const handleUploadProfile = async (e: Event) => {
    if (e.target != null) {
      const target = e.target as HTMLInputElement;
      const file = target.files ? target.files[0] : undefined;
      if (file) {
        try {
          const data = await uploadProfileCoverFile(file);
          console.log(data);
          target.value = "";
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <input
        type="file"
        id="profile-cover"
        accept="image/*"
        onChange={handleUploadProfile}
      />
    </div>
  );
}
