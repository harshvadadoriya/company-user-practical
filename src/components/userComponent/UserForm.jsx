import {
	Box,
	Button,
	Divider,
	FormControl,
	FormLabel,
	Input,
	Select,
	Text,
	VStack,
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyData } from '../../redux/companySlice/companySLice';
import { addUserFormData } from '../../redux/userSlice/userSlice';
import { generateUniqueId } from '../../utils/generateUniqueId';

const UserForm = () => {
	const initialState = {
		id: generateUniqueId(),
		name: '',
		address: '',
		company: '',
	};
	const [userFormData, setUserFormData] = useState(initialState);
	const dispatch = useDispatch();
	const companyDetails = useSelector(getCompanyData);
	const handleFormSubmit = (e) => {
		e.preventDefault();
		dispatch(addUserFormData(userFormData));
		setUserFormData(initialState);
	};
	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setUserFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const uniqueCompanyNames = useMemo(
		() => Array.from(new Set(companyDetails.map((item) => item.name))),
		[companyDetails]
	);

	return (
		<Box borderWidth="1px" borderRadius="md" borderColor="gray.300">
			<Box>
				<Text px="5" py={2} fontSize="2xl" color="teal" fontWeight="bold">
					New User Form
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
								value={userFormData.name}
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
								value={userFormData.address}
								onChange={handleFormChange}
							/>
						</Box>
						<Box>
							<FormLabel>Company</FormLabel>
							<Select
								placeholder="Select company"
								borderColor="gray.400"
								name="company"
								value={userFormData.company}
								onChange={handleFormChange}
							>
								{uniqueCompanyNames.map((item) => (
									<option key={item} value={item}>
										{item}
									</option>
								))}
							</Select>
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

export default UserForm;
