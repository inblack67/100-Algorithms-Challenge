const htmlEndTagByStartTag = (startTag: string): string => {
    const strTag = startTag.split('');
    strTag.pop();
    strTag.shift();
    const pure = strTag.join('');
    const res = pure.split(' ')[ 0 ];
    return `</${ res }>`;
};

const str = '<Form.Control disabled>';
console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));
console.log(htmlEndTagByStartTag(str));