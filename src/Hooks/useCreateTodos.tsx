import { v4 as uuidv4 } from 'uuid';
import { loremIpsum } from 'lorem-ipsum';
const useCreateTodos = (count: number) => {
    let records = [];

    for (let i = 0; i < count; i++) {
        records.push({
            id: uuidv4(),
            title: loremIpsum({
                count: 1,
                units: 'sentences',
                sentenceLowerBound: 2,
                sentenceUpperBound: 5,
            }),
            completed: false
        });
    }

    return records;
};

export default useCreateTodos;
