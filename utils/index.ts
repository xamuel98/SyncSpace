export const maskify = (str: string, len: number = 4): string => {
    const maskLength = str.length - len;
    return str.replace(new RegExp(`^.{${maskLength}}`), "*".repeat(maskLength));
};