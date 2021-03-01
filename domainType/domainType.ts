function domainType (domains: string[]): string[] {

    const res: string[] = [];

    domains.forEach(domain => {
        const domainArr = domain.split('.');
        console.log(domainArr);
        const topLevel = domainArr[ domainArr.length - 1 ];
        ;
        console.log(topLevel);
        res.push(topLevel);
    });

    const final = res.map((el) => {
        switch (el) {
            case 'org':
                return 'organization';
            case 'com':
                return 'commercial';
            case 'net':
                return 'network';
            case 'info':
                return 'information';
            default:
                return el;
        }
    });

    return final;
}

console.log(domainType([ "en.wiki.org", "codefights.com", "happy.net", "code.info" ]));