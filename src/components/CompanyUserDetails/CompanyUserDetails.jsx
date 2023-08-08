import { Box, Center, Divider, Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getUserData } from '../../redux/userSlice/userSlice';

const CompanyUserDetails = () => {
	const { state } = useLocation();
	const companyData = state.companyDetails;
	const userData = useSelector(getUserData);
	const matchedData = userData.filter((item) => {
		return item.company === companyData.name;
	});
	return (
		<>
			<Heading m={5} color="teal">
				Company
			</Heading>
			<Box
				key={companyData.id}
				m={5}
				borderWidth="1px"
				borderRadius={5}
				bgColor="gray.100"
			>
				<Box p={2}>
					<Text fontWeight="bold">Name</Text>
					<Text>{companyData.name}</Text>
					<Text fontWeight="bold">Address</Text>
					<Text>{companyData.address}</Text>
					<Text fontWeight="bold">Phone</Text>
					<Text>{companyData.phone}</Text>
					<Text fontWeight="bold">Revenue</Text>
					<Text>{companyData.revenue}</Text>
					<Text fontWeight="bold">No. of Employees</Text>
					<Text>{matchedData.length}</Text>
				</Box>
				<Divider borderColor="gray.300" />
				<Box p={0.5} bgColor={'gray.300'}></Box>
			</Box>
			<Heading m={5} color="teal">
				User Details
			</Heading>
			{matchedData.length > 0 ? (
				matchedData.map((item) => (
					<Box key={item.id}>
						<Box p={2} borderWidth={1} m={5}>
							<Text fontWeight="bold">Name</Text>
							<Text>{item.name}</Text>
							<Text fontWeight="bold">Address</Text>
							<Text>{item.address}</Text>
						</Box>
					</Box>
				))
			) : (
				<Center>No User Found</Center>
			)}
		</>
	);
};

export default CompanyUserDetails;
