import React from 'react';
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types';
import { todoState } from '../../../App';
import { atom, useRecoilState } from "recoil";
import CharacterCounter from '../CharacterCounter/CharacterCounter';
import { Box, Card, Container, Flex, Heading, Textarea, Text, Button } from '@theme-ui/components';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const textState = atom({
    key: 'textState',
    default: '',
});


const TaskView = () => {
    const [todoList, setTodoList] = useRecoilState(todoState);
    const [text, setText] = useRecoilState(textState);
    const { id } = useParams()


    let index = todoList.findIndex((listItem) => listItem.id == id);
    let item = todoList.filter((listItem) => listItem.id == id)[0];
    console.log();

    const editItemText = (e) => {
        let target = e.target.placeholder;
        let value = e.target.value;
        if (target == 'Title') {
            const newList = replaceItemAtIndex(todoList, index, {
                ...item,
                title: value,
            });
            setTodoList(newList);
            setText(value);
        }
        if (target == 'Notes') {
            const newList = replaceItemAtIndex(todoList, index, {
                ...item,
                notes: value,
            });
            setTodoList(newList);
            setText(value);
        }
        if (target == 'URL') {
            const newList = replaceItemAtIndex(todoList, index, {
                ...item,
                url: value,
            });
            setTodoList(newList);
            setText(value);
        }


    };

    const formatDate = (dateToBeFormated) => {
        // console.log(Date.prototype.getFullYear());
        const date = new Date(dateToBeFormated)
        const dateFormated = date.getDay() + '.' + date.getMonth() + '.' + date.getFullYear()

        return dateFormated
    }



    return (
        <Container sx={{ py: [3, 4], maxWidth: [null, 550] }}>
            <Card sx={{ height: ['narrow', 'auto', 'copy'] }}>
                <Flex sx={{ justifyContent: 'space-between' }}>
                    <Link to='/' style={{ textDecoration: 'none' }}><Heading as='h5'><AiOutlineArrowLeft /> All Tasks</Heading></Link>
                    <CharacterCounter />
                    <Box sx={{ display: 'grid', height: 'auto' }}>
                        <Text>created {formatDate(item.created_at)}</Text>
                        <Text>updated {formatDate(item.updated_at)}</Text>
                    </Box>
                </Flex>

                <Container sx={{ display: 'grid', gap: 5, mt: [1, 3, 5] }} >
                    <Textarea sx={{ mt: 2, borderBottom: '1px solid', borderRadius: 0, borderColor: 'sunken' }}
                        rows={2}
                        placeholder='Title'
                        value={item.title}
                        onChange={editItemText}
                    />
                    <Textarea sx={{ mt: 2, borderBottom: '1px solid', borderRadius: 0, borderColor: 'sunken' }}
                        rows={3}
                        value={item.notes}
                        placeholder='Notes'
                        onChange={editItemText}
                    />
                    <Textarea sx={{ mt: 2, borderBottom: '1px solid', borderRadius: 0, borderColor: 'sunken' }}
                        rows={2}
                        value={item.url}
                        placeholder='URL'
                        onChange={editItemText}
                    />
                </Container>
                <Flex sx={{justifyContent:'center'}}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Button variant='outline' sx={{ mt: [3, 3,5],color: 'muted' }}>Save</Button>
                </Link>
                </Flex>
            </Card>
        </Container>
    );
}

const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}


TaskView.propTypes = {
    state: PropTypes.array,
}
export default TaskView;