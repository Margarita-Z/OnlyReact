//styled components
import { StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText } from './../components/Styles';
import Logo from './../assets/logo.jpg';

//formik
import { Formik, Form } from 'formik';
import { TextInput } from '../components/Formlib';
import * as Yup from 'yup';

//icons
import { FiMail, FiLock } from 'react-icons/fi';

//auth & redux
import { connect } from 'react-redux';
import { loginUser } from '../auth/actions/userActions';
import { useNavigate } from 'react-router-dom';




const LoginPage = ({loginUser}) => {
    const navigate = useNavigate();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>Member Login</StyledTitle>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email('Invalid email address').required('Required'),
                            password: Yup.string().min(8, "Password is too short").max(20, 'Password id too long').required('Required'),
                        })
                    }
                    onSubmit={(values, { setSubmitting, setFieldError }) => {
                        console.log(values);
                        loginUser(values, navigate, setFieldError, setSubmitting);
                    }}
                >
                    {(isSubmitting) => (
                        <Form>
                            <TextInput
                                name='email'
                                type='text'
                                label='Email Address'
                                placeholder='olgal@example.com'
                                icon={<FiMail />}
                            />
                            <TextInput
                                name='password'
                                type='password'
                                label='Password'
                                placeholder='*********'
                                icon={<FiLock />}
                            />
                            <ButtonGroup>
                                <StyledFormButton type='submit'>Login</StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    New here? <TextLink to='/signup'>Sign up</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All right reserved &copy;2022
            </CopyrightText>
        </div>
    )
}
export default connect(null, {loginUser}) (LoginPage);