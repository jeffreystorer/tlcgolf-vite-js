import React from 'react';
import {
  CopyLineupToClipboardButton,
  CopyPlayerListToClipboardButton,
  DownloadScreenshotButton,
} from '@/components/export/buttons';
import { showCopyLineupToClipboard } from '@/utils';
import '@/styles/App.css';

export default function CopyAndDownLoadButtonsContainer({ jpgImageRef }) {
  return (
    <>
      {showCopyLineupToClipboard() && (
        <CopyLineupToClipboardButton jpgImageRef={jpgImageRef} />
      )}
      <CopyPlayerListToClipboardButton />
      <DownloadScreenshotButton />
    </>
  );
}
