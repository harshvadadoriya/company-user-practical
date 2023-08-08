import {
	Box,
	Button,
	Divider,
	FormControl,
	FormLabel,
	Input,
	Text,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCompanyFormData } from '../../redux/companySlice/companySLice';
import { generateUniqueId } from '../../utils/generateUniqueId';

const CompanyForm = () => {
	const initialState = {
		id: generateUniqueId(),
		name: '',
		address: '',
		revenue: '',
		phone: '',
	};
	const [companyFormData, setCompanyFormData] = useState(initialState);
	const dispatch = useDispatch();
	const handleFormSubmit = (e) => {
		e.preventDefault();
		dispatch(addCompanyFormData(companyFormData));
		setCompanyFormData(initialState);
	};

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setCompanyFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<Box borderWidth="1px" borderRadius="md" borderColor="gray.300">
			<Box>
				<Text px="5" py={2} fontSize="2xl" color="teal" fontWeight="bold">
					New Company Form
				</Text>
			</Box>
			<Divider borderColor="gray.300" />
			<form onSubmit={handleFormSubmit}>
				<FormControl isRequired>
					<VStack spacing={4} align="stretch" p="5">
						<Box>
							<FormLabel>Name</FormLabel>
							<Input
								borderColor="gray.400"
								isRequired
								type="text"
								placeholder="Name"
								name="name"
								value={companyFormData.name}
								onChange={handleFormChange}
							/>
						</Box>
						<Box>
							<FormLabel>Address</FormLabel>
							<Input
								borderColor="gray.400"
								isRequired
								type="text"
								placeholder="Address"
								name="address"
								value={companyFormData.address}
								onChange={handleFormChange}
							/>
						</Box>
						<Box>
							<FormLabel>Revenue</FormLabel>
							<Input
								borderColor="gray.400"
								isRequired
								type="number"
								placeholder="Revenue"
								name="revenue"
								value={companyFormData.revenue}
								onChange={handleFormChange}
							/>
						</Box>
						<Box>
							<FormLabel>Phone</FormLabel>
							<Input
								borderColor="gray.400"
								isRequired
								type="number"
								placeholder="Phone"
								name="phone"
								value={companyFormData.phone}
								onChange={handleFormChange}
							/>
						</Box>
						<Box>
							<Button w="7rem" colorScheme="teal" type="submit">
								Save
							</Button>
						</Box>
					</VStack>
				</FormControl>
			</form>
		</Box>
	);
};

export default CompanyForm;
