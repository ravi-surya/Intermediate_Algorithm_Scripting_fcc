function whatIsInAName(collection, source)
{
    const collectionMatches=[];

    for(let i=0;i<collection.length;i++)
    {
        let foundmismatch=false;

        for(const s in source)
        {
            if(collection[i][s]!==source[s])
            {
                foundmismatch=true;

            }
        }
        if(foundmismatch ===false)
        {
            collectionMatches.push(collection[i]);
        }
    }
    return collectionMatches;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));