import boyProfile1 from '../assets/boy profile.jpg'
import boyProfile2 from '../assets/boy profile 2.jpg'
import boyProfile3 from '../assets/boy profile 3.jpg'
import boyProfile4 from '../assets/boy profile 4.jpg'
import girlProfile1 from '../assets/girl profile 1.jpg'
import girlProfile2 from '../assets/girl profile 2.jpg'
import girlProfile3 from '../assets/girl profile 3.jpg'
import girlProfile4 from '../assets/girl profile 4.jpg'

export const profiles = [
  { id: 1, name: 'Sravani Reddy', age: 26, location: 'Hyderabad', profession: 'Software Engineer', education: 'B.Tech', religion: 'Hindu', caste: 'Reddy', height: "5'4\"", score: 92, photo: girlProfile1, gender: 'bride' },
  { id: 2, name: 'Naveen Kumar', age: 29, location: 'Bangalore', profession: 'Data Scientist', education: 'M.Tech', religion: 'Hindu', caste: 'Kamma', height: "5'10\"", score: 88, photo: boyProfile1, gender: 'groom' },
  { id: 3, name: 'Divya Lakshmi', age: 24, location: 'Vijayawada', profession: 'Doctor', education: 'MBBS', religion: 'Hindu', caste: 'Brahmin', height: "5'5\"", score: 95, photo: girlProfile2, gender: 'bride' },
  { id: 4, name: 'Anil Kumar', age: 31, location: 'USA', profession: 'IT Manager', education: 'MS', religion: 'Hindu', caste: 'Reddy', height: "5'11\"", score: 90, photo: boyProfile2, gender: 'groom' },
  { id: 5, name: 'Harika Sharma', age: 25, location: 'Visakhapatnam', profession: 'CA', education: 'CA Final', religion: 'Hindu', caste: 'Vaishya', height: "5'3\"", score: 87, photo: girlProfile3, gender: 'bride' },
  { id: 6, name: 'Sai Kiran', age: 28, location: 'Hyderabad', profession: 'Entrepreneur', education: 'MBA', religion: 'Hindu', caste: 'Kamma', height: "5'9\"", score: 91, photo: boyProfile3, gender: 'groom' },
  { id: 7, name: 'Ramya Sri', age: 27, location: 'Chennai', profession: 'Architect', education: 'B.Arch', religion: 'Hindu', caste: 'Reddy', height: "5'4\"", score: 85, photo: girlProfile4, gender: 'bride' },
  { id: 8, name: 'Karthik Varma', age: 30, location: 'Hyderabad', profession: 'Doctor', education: 'MD', religion: 'Hindu', caste: 'Brahmin', height: "5'10\"", score: 94, photo: boyProfile4, gender: 'groom' },
  { id: 9, name: 'Lalitha Devi', age: 23, location: 'Tirupati', profession: 'Teacher', education: 'B.Ed', religion: 'Hindu', caste: 'Kamma', height: "5'2\"", score: 82, photo: girlProfile1, gender: 'bride' },
]

export const profileDetails = {
  1: { about: 'I am a software engineer at a top MNC in Hyderabad. I love classical dance, reading Telugu literature, and cooking. Looking for a well-educated, understanding partner who values family traditions.', family: { father: 'Retired Government Officer', mother: 'Homemaker', siblings: '1 brother (married)' }, expectations: "Looking for a well-educated, employed person with good family values. Age 26–32, height 5'7\" and above.", diet: 'Vegetarian', smoke: 'No', drink: 'No', hobbies: 'Classical Dance, Reading, Cooking' },
  2: { about: 'Data Scientist at a leading tech company in Bangalore. Passionate about cricket, travel, and Telugu food. Family-oriented person looking for a loving life partner.', family: { father: 'Business', mother: 'Teacher', siblings: '1 sister (unmarried)' }, expectations: 'Looking for a well-educated, simple, family-oriented bride. Age 23–28.', diet: 'Non-Vegetarian', smoke: 'No', drink: 'Occasionally', hobbies: 'Cricket, Travelling, Photography' },
  3: { about: 'MBBS doctor working in Vijayawada. Passionate about healthcare and helping communities. I enjoy Carnatic music, painting, and cooking traditional Telugu dishes.', family: { father: 'Retired Teacher', mother: 'Doctor', siblings: '1 younger brother (student)' }, expectations: 'Looking for a kind, educated groom aged 26–32 who values both career and family.', diet: 'Vegetarian', smoke: 'No', drink: 'No', hobbies: 'Carnatic Music, Painting, Cooking' },
  4: { about: 'IT Manager based in the USA with 8+ years of experience. I am a traditional Telugu at heart with modern outlook. Love travelling, cooking, and cricket.', family: { father: 'Business Owner', mother: 'Homemaker', siblings: '1 sister (married, USA)' }, expectations: 'Looking for an educated, career-driven bride comfortable with NRI lifestyle. Age 25–30.', diet: 'Non-Vegetarian', smoke: 'No', drink: 'Socially', hobbies: 'Travelling, Cricket, Cooking' },
  5: { about: 'Chartered Accountant in Visakhapatnam. I am passionate about finance, fitness, and Telugu culture. Family is my priority and I believe in a balanced life.', family: { father: 'Chartered Accountant', mother: 'Homemaker', siblings: 'Only child' }, expectations: 'Looking for a well-settled, respectful groom. Age 27–33, preferably a professional.', diet: 'Vegetarian', smoke: 'No', drink: 'No', hobbies: 'Yoga, Reading, Cooking' },
  6: { about: 'Entrepreneur running a successful startup in Hyderabad. I value innovation, family bonds, and Telugu culture. Looking for a life partner who is ambitious and grounded.', family: { father: 'Businessman', mother: 'Teacher', siblings: '1 brother (engineer)' }, expectations: 'Looking for an educated, independent bride aged 24–29 who supports entrepreneurship.', diet: 'Non-Vegetarian', smoke: 'No', drink: 'Occasionally', hobbies: 'Startups, Travel, Photography' },
}
