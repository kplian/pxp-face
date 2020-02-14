import React, { useContext } from 'react';
import { InputGroupText, InputGroupAddon, InputGroup, Input } from 'reactstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { CustomersContext } from '../CustomersContext';

const SearchFilter = () => {
    const { changeTextFilter, textFilter } = useContext(CustomersContext);
    return (
        <InputGroup size="lg">
            <Input placeholder="Search..." value={ textFilter } onChange={ changeTextFilter }/>
            <InputGroupAddon addonType="append">
                <InputGroupText className="bg-primary"><MaterialIcon icon="search" size="tiny" color="white"/></InputGroupText>
            </InputGroupAddon>
        </InputGroup>
    )
}

export default SearchFilter;