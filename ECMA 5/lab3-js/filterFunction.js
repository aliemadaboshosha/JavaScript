function filter(array1,conditionFunction)
    {
        let result=[]
        for(value of array1)
        {
            if(conditionFunction(value))
            result.push(value);

        }

        return result;
}