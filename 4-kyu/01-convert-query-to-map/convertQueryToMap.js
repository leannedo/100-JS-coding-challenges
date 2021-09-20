const query1 = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue';

const convertQueryToMap = query => {
    const queryParts = query.split('&');
    const queryObj = {};

    const queryList = queryParts.map(query => query.split('='))
                                .map(([key,value]) => [key.split('.'), value]);

    //  [
    // [ [ 'user', 'name', 'firstname' ], 'Bob' ],
    // [ [ 'user', 'name', 'lastname' ], 'Smith' ],
    // [ [ 'user', 'favoritecolor' ], 'Light%20Blue' ]
    //  ]

    queryList.map(([keyList, value]) => {
        for (let i = 1; i < keyList.length; i++) {
            const mainLevel = keyList[0];

            queryObj[mainLevel] = {};

            queryObj[mainLevel][keyList[i]] = {};

            if (i === keyList.length - 1) {
                queryObj[mainLevel][keyList[i]] = value;
                return;
            }
        }
    })

    return queryObj;
}

console.log(convertQueryToMap(query1));