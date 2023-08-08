import { Box, Divider, Spacer, Text } from '@chakra-ui/react';
import CompanyForm from '../companyComponent/CompanyForm';
import UserForm from '../userComponent/UserForm';
import { useSelector } from 'react-redux';
import { getCompanyData } from '../../redux/companySlice/companySLice';
import { useNavigate } from 'react-router-dom';

const RootComponent = () => {
	const navigate = useNavigate();

	const companyDetails = useSelector(getCompanyData);

	const handleCompanyDetailsClick = (companyDetails) => {
		navigate(`/details/${companyDetails.id}`, { state: { companyDetails } });
	};
	return (
		<Box display="flex" flexWrap="wrap" justifyContent="space-between" p="5">
			<Box
				borderWidth="1px"
				borderTopRadius={'md'}
				width="70%"
				css={{
					'@media screen and (max-width: 767px)': {
						width: '100%',
					},
				}}
			>
				<Text px="3" py={2} fontSize="2xl" color="teal" fontWeight="bold">
					Company Details
				</Text>
				<Divider />
				{companyDetails.map((item) => (
					<Box
						key={item.id}
						m={3}
						borderWidth="1px"
						borderRadius={5}
						bgColor="gray.100"
					>
						<Box p={2}>
							<Text fontWeight="bold">Name</Text>
							<Text>{item.name}</Text>
							<Text fontWeight="bold">Address</Text>
							<Text>{item.address}</Text>
							<Text fontWeight="bold">Phone</Text>
							<Text>{item.phone}</Text>
							<Text fontWeight="bold">Revenue</Text>
							<Text>{item.revenue}</Text>
						</Box>
						<Divider borderColor="gray.300" />
						<Box p={2}>
							<Text
								color="teal.600"
								fontWeight="bold"
								cursor="pointer"
								onClick={() => handleCompanyDetailsClick(item)}
							>
								View Company Details
							</Text>
						</Box>
					</Box>
				))}
			</Box>
			<Box
				width="25%"
				mt={{ base: '5', md: '0' }}
				css={{
					'@media screen and (max-width: 767px)': {
						width: '100%',
					},
				}}
			>
				<CompanyForm />
				<Spacer my={5} />
				<UserForm />
			</Box>
		</Box>
	);
};

export default RootComponent;
