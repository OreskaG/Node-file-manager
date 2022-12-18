export function inputConverter(input) {
    let cmd = [];
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