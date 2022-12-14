import { Form, Button } from 'react-bootstrap'

const EditQuantityForm = (props) => {
    const { inventoryToUpdate, handleChange, handleSubmit } = props
    console.log('this is the inventory to update in the form', inventoryToUpdate)
    console.log('this is the amount going into the form', inventoryToUpdate.amount)

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor='amount'>Quantity</Form.Label>
                    <Form.Control
                        type='number'
                        name='amount'
                        value={inventoryToUpdate.amount}
                        placeholder='Enter amount'
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className='m-2' variant='primary' size='sm' type='submit'>Edit Amount</Button>
            </Form>
        </div>
    )
}

export default EditQuantityForm