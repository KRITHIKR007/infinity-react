/**
 * Image utility functions for handling image operations
 */

/**
 * Handles image loading errors by setting a fallback
 * @param e - The error event from the image
 */
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const publicUrl = process.env.PUBLIC_URL || '';
  e.currentTarget.src = `${publicUrl}/images/placeholder.jpg`;
  e.currentTarget.classList.add('fallback-image');
  
  // Add a data attribute for tracking fallback usage
  e.currentTarget.dataset.usingFallback = 'true';
};

/**
 * Gets image URL with proper public path handling
 * @param imagePath Original image path
 * @returns Safe image path with public URL prefix
 */
export const getImageUrl = (imagePath: string): string => {
  // If path starts with http, it's an external URL
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // If it's a base64 string, return it as is
  if (imagePath.startsWith('data:')) {
    return imagePath;
  }
  
  // Add public URL prefix to local images
  const publicUrl = process.env.PUBLIC_URL || '';
  return `${publicUrl}${imagePath}`;
};

/**
 * Converts a file to a base64 string
 * @param file The file to convert
 * @returns Promise that resolves with the base64 string
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};