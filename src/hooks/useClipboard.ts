import { toast } from 'react-hot-toast';

const useClipboard = () => {
  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        toast.success('Copied to clipboard!');
        return true;
      } catch (error) {
        toast.error('Failed to copy text.');
        console.error('Error using Clipboard API:', error);
        return false;
      }
    } else {
      // Fallback for unsupported browsers
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        toast.success('Copied to clipboard (fallback)!');
        return true;
      } catch (error) {
        toast.error('Failed to copy text (fallback).');
        console.error('Fallback error:', error);
        return false;
      }
    }
  };

  return { copyToClipboard };
};

export default useClipboard;
