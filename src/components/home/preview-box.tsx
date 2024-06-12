"use client"
import { useState, useEffect } from "react";
import { AudioWaveform, FileIcon, FileImage, HardDriveUploadIcon, Video, X, Link } from "lucide-react";

enum FileTypes {
  Image = "image",
  Pdf = "pdf",
  Audio = "audio",
  Video = "video",
}

interface File {
  name: string;
  type: FileTypes;
}

const funPuns = [
  "BootstrappedSuccess.wav",
  "PitchDeck.pdf",
  "MVP.png",
  "GrowthHacker.mp4",
  "StartupWeekend.jpg",
  "SideHustle.mp3",
  "CodeSprint.wav",
  "EquitySplit.pdf",
  "UserJourney.jpg",
  "ViralLoop.mp4",
  "FounderLife.png",
  "LeanStartup.mp3",
];  

const getFileIcon = (fileType: FileTypes) => {
  switch (fileType) {
    case FileTypes.Image:
      return <FileImage size={40} />;
    case FileTypes.Pdf:
      return <FileIcon size={40} />;
    case FileTypes.Audio:
      return <AudioWaveform size={40} />;
    case FileTypes.Video:
      return <Video size={40} />;
    default:
      return <FileIcon size={40} />;
  }
};

export default function PreviewBox() {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const generateFunPun = (): string => {
      return funPuns[Math.floor(Math.random() * funPuns.length)];
    };

    const getRandomFileType = (): FileTypes => {
      const types = Object.values(FileTypes);
      return types[Math.floor(Math.random() * types.length)];
    };

    const generateUniqueFiles = (count: number): File[] => {
      const uniqueFiles: File[] = [];
      const usedNames = new Set<string>();

      while (uniqueFiles.length < count) {
        const name = generateFunPun();
        if (!usedNames.has(name)) {
          uniqueFiles.push({ name, type: getRandomFileType() });
          usedNames.add(name);
        }
      }

      return uniqueFiles;
    };

    const sampleFiles = generateUniqueFiles(5);
    setFiles(sampleFiles);
  }, []);

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex flex-col items-center justify-center p-4 md:p-8 border border-gray-800 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-600">
        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <HardDriveUploadIcon size={24} className="text-gray-500 md:text-xl dark:text-gray-300" />
          <p className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200">Drag & Drop Files Here</p>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">or click to browse</p>
          <p className="text-xs text-gray-400 italic">*This is a demo. The original component may look slightly different.</p>
        </div>
        <input type="file" className="hidden" />
        <div className="mt-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
            {files.map((file, index) => (
              <div key={index} className="relative group flex flex-col items-center w-full animate-fadeIn">
                <div className="w-full h-24 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity relative animate-pulse">
                  <Link size={16} className="absolute left-1 top-1 text-gray-500 dark:text-gray-300" />
                  {getFileIcon(file.type)}
                </div>
                <p className="mt-2 text-gray-800 dark:text-gray-200 text-sm font-medium truncate w-full text-center">{file.name}</p>
                <button className="absolute top-1 right-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-bounce" onClick={() => removeFile(index)}>
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
