import React from "react";

type Props = {
  filePath?: string;      // default: /resume.pdf
  fileName?: string;      // default: Yakshika_Sivaperumal_Resume.pdf
  className?: string;
  children?: React.ReactNode;
};

export default function DownloadResumeButton({
  filePath = "/resume.pdf",
  fileName = "Yakshika_Sivaperumal_Resume.pdf",
  className = "",
  children = "Download Resume",
}: Props) {
  // Fallback method that forces download even if browser tries to open inline
  const forceDownload = async () => {
    try {
      const res = await fetch(filePath);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      // As a fallback, let the browser handle the link
      window.open(filePath, "_blank");
    }
  };

  return (
    <a
      href={filePath}
      download={fileName}
      onClick={(e) => {
        // Some browsers may ignore `download` due to headers/MIME;
        // prevent default and force it.
        e.preventDefault();
        forceDownload();
      }}
      className={className}
    >
      {children}
    </a>
  );
}
