function addBorder(picture: string[]): string[] {
    const hack = '*****';
    const newPicture = picture.map(pic => {
        const newPic = pic.split('');
        newPic.push('*');
        newPic.unshift('*');
        return newPic.join('');
    })

    newPicture.push(hack);
    newPicture.unshift(hack);

    return newPicture;
}

console.log(addBorder(["abc", "ded", 'efg']));