{
    Object.entries(filters).map(([filter, selected]) => {
        return (
            <Form.Group key={filter}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>{filter}</InputGroup.Text>
                    </InputGroup.Prepend>

                    <InputGroup.Append>
                        <Button
                            onClick={() => setFilters(existing => {
                                const { [filter]: _, ...rest } = existing;

                                return rest;
                            })}
                            variant="outline-secondary">
                            <FaTrash />
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form.Group>
        );
    })
}