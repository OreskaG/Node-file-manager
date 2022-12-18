export function inputConverter(input) {
    let cmd = [];

    if(input.startsWith('rn') || input.startsWith('cp') || input.startsWith('mv') || input.startsWith('compress') || input.startsWith('decompress')) {

        if(input.includes('"') || input.includes("'")) {

            const temp = input.replace(/'/g, '"').split(' ');

            const args = temp.reduce((acc,e,i) => {
                if( i === 0 ) return acc;
                if(e.startsWith('"') && e.endsWith('"')) {
                    if( i !== temp.length - 1) {
                        acc.push(e.replace(/"/g, '') + '|');
                    } else {
                        acc.push(e.replace(/"/g, ''));
                    }
                    return acc;
                }
                if(e.startsWith('"')) {
                    acc.push(e.replace(/"/g, '') + ' ');
                    return acc;
                }
                if(e.endsWith('"')) {
                    if( i !== temp.length - 1) {
                        acc.push(e.replace(/"/g, '') + '|');
                    } else {
                        acc.push(e.replace(/"/g, ''));
                    }
                    return acc;
                }
                acc.push(e + ' ')
                return acc;
            }, [])
            cmd.push(temp[0]);
            return cmd.concat(args.join('').split('|'))
        }
    }

    if(input.split(' ').length > 2) {
        const temp = input.split(' ');
        cmd.push(temp[0]);
        const args = temp.reduce((acc, e, i) => {
            if (i !== 0) {
                acc.push(e.replace(/"/g, '').replace(/'/g, ''));
                return acc
            } else {
                return acc
            }
        }, [])
        cmd.push(args.join(' '));
    } else {
        cmd = input.split(' ');
    }
    return cmd;
}