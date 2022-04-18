

function validateEmail(arrGroups){

    let regex = /^(fm|fe|fd|FD|FE|FM)20\d{2}(-\d{1,2})?$/g

    arrGroups.forEach((group) => {
        if(group.search(regex)<0) {
            console.log(group + "  Error");
        }
        else {
            console.log(group + "  Success");
        
    }
})
}

arrGroups = [
    'FD2022-12',
    'FE2000-1',
    'fm2008',

    'Fd2022-87',
    'fE2008',
    'FM1999-1',
    'FS2022-2',

    'f',
    'FSFD210',
    'Fe2020-2',
    'FD2021',
    'fD2022-1',
    'FE2020-3',
    'FD2020/2',
    'fe2021-3',
    'FD2020$5',
    'FE2008-52',
    'Fm2008-23',
    'FM2022-1',
    ];

validateEmail(arrGroups)