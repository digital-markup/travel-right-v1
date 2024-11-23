"use server";
const base64ToBlob = async (base64: string) => {
    // Extract the MIME type and base64 content
    const matches = base64.match(/^data:([^;]+);base64,(.*)$/);

    if (!matches) {
        throw new Error('Invalid base64 data URL format');
    }

    const [, mimeType, base64Content] = matches;

    // Decode the base64 string
    const byteCharacters = atob(base64Content);

    // Convert character codes to byte array
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    // Create Uint8Array from byte numbers
    const byteArray = new Uint8Array(byteNumbers);

    // Create and return Blob
    return new Blob([byteArray], { type: mimeType });
}

export default base64ToBlob