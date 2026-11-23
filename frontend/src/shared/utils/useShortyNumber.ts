export const useShortyNumber = (number: number) => {
    if (!Number.isInteger(number) || number <= 0) return 0;

    switch (true) {
        case number >= 1000000000:
            return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';

        case number >= 1000000:
            return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';

        case number >= 1000:
            return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';

        default:
            return number.toString();
    }
};