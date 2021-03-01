function domainType (domains: string[]): string[] {

    const domainObj = {
        org: 'organization',
        com: 'commercial',
        net: 'network',
        info: 'information'
    };

    const res: string[] = [];

    domains.forEach(domain => {
        const domainArr = domain.split('.');
        const topLevel = domainArr[ domainArr.length - 1 ];
        ;
        res.push(domainObj[ topLevel ]);
    });

    return res;
}

console.log(domainType([ "en.wiki.org", "codefights.com", "happy.net", "code.info" ]));