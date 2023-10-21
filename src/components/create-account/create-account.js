'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '../button/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { NextResponse } from 'next/server';
import { Toaster, toast } from 'react-hot-toast';
import convertToBase64 from '@/helper/convert';
import avatar from '@/images/profile.png';

export default function CreateAccount() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [passport, setPassport] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState({});
  const [studentId, setStudentId] = useState('');
  const [careerPath, setCareerPath] = useState([]);
  const [skillsAcquired, setSkillsAcquired] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [facebookUrl, setFacebookUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [workAvailabilty, setWorkAvailabilty] = useState(true);
  const [workType, setWorkType] = useState('');

  function handleCheckbox(event) {
    const { value, checked } = event.target;

    if (checked) {
      setCareerPath((careerPath) => [...careerPath, value]);
    } else {
      setCareerPath((careerPath) => [...careerPath]);
    }
  }

  async function profileImageUpload(event) {
    const base64 = await convertToBase64(event.target.files[0]);
    setPassport(base64);
  }

  async function handleSubmit(event) {
    try {
      setLoading(true);
      event.preventDefault();

      const newForm = {
        passport,
        firstName,
        lastName,
        email,
        password,
        bio,
        dateOfBirth,
        studentId,
        careerPath,
        skillsAcquired,
        state,
        city,
        portfolioUrl,
        facebookUrl,
        instagramUrl,
        linkedInUrl,
        workAvailabilty,
        workType,
      };

      const newUser = await axios.post('api/auth/signUp', newForm);

      // toast.promise(newUser, {
      //   loading: 'Processing...',
      //   success: (data) =>
      //     `The new user ${data.firstName} was created successfully!`,
      //   error: 'User creation failed!',
      // });

      toast.success(
        `The new user ${newUser.firstName} was created successfully!`
      );

      setPassport('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setBio('');
      setDateOfBirth({});
      setStudentId('');
      setCareerPath([]);
      setSkillsAcquired('');
      setState('');
      setCity('');
      setPortfolioUrl('');
      setFacebookUrl('');
      setInstagramUrl('');
      setLinkedInUrl('');
      setWorkAvailabilty(true);
      setWorkType('');

      router.push('/dashboard');
      return NextResponse.json({ message: 'User created successfully' });
    } catch (error) {
      toast.error('User creation failed!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className='w-full h-full bg-gray-700 text-white'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='md:ml-28 top-24 md:top-6 overflow-hidden antialiased flex flex-col justify-center gap-10'>
        <div className='md:self-start self-center'>
          <h2 className='text-2xl text-primary font-bold tracking-wide py-4'>
            Profile Setting
          </h2>
          <div className='bg-white flex items-center justify-center cursor-pointer'>
            <label className='cursor-pointer' htmlFor='passport'>
              <Image
                src={passport || avatar}
                alt='student passport'
                width={145}
                height={145}
              />
            </label>

            <input
              onChange={profileImageUpload}
              type='file'
              name='profile'
              id='profile'
            />
          </div>
        </div>
        <div>
          <form
            className='[&>:not(:last-child)]:my-2'
            onSubmit={handleSubmit}
            method='post'
            encType='multipart/form-data'
          >
            <div className='grid place-content-center md:grid-cols-2 gap-2 md:gap-4'>
              <span>
                <input
                  className='mt-2'
                  type='file'
                  name='passport'
                  accept='passport/*'
                  id='passport'
                  onChange={profileImageUpload}
                />
                <small className='block text-primary'>
                  Maximum file size 1 MB
                </small>
              </span>
              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor='firstName'>
                  First Name{' '}
                </label>
                <input
                  className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  type='text'
                  name='firstName'
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder='Enter first name'
                />
              </div>
              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor='lastName'>
                  Last Name{' '}
                </label>
                <input
                  className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  type='text'
                  name='lastName'
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder='Enter last Name'
                />
              </div>
              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor='email'>
                  Email{' '}
                </label>
                <input
                  className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  type='email'
                  name='email'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder='youremail@mail.com'
                />
              </div>
              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor='password'>
                  Password{' '}
                </label>
                <input
                  className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-black text-slate-700'
                  type='password'
                  name='password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder='Password'
                />
              </div>
              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor='bio'>
                  Brief Bio{' '}
                </label>
                <textarea
                  className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  name='bio'
                  id=''
                  cols='22'
                  rows='2'
                  value={bio}
                  onChange={(event) => setBio(event.target.value)}
                ></textarea>
              </div>
              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor='date'>
                  Date of Birth{' '}
                </label>
                <input
                  className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  type='date'
                  name='date'
                  id='date'
                  value={dateOfBirth}
                  onChange={(event) => setDateOfBirth(event.target.value)}
                  placeholder=''
                />
              </div>
              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor='studentId'>
                  Student ID{' '}
                </label>
                <input
                  className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  type='text'
                  name='studentId'
                  id='studentId'
                  value={studentId}
                  onChange={(event) => setStudentId(event.target.value)}
                  placeholder='Enter your ID number'
                />
              </div>
            </div>
            <div className='py-10'>
              <h5 className='py-4 text-primary font-bold tracking-wide text-center'>
                IT Career Path
              </h5>
              <div className='w-full grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <div>
                  <input
                    className='checked:ring-1 checked:ring-primary text-slate-700'
                    type='checkbox'
                    name='careerPath'
                    value='MS Office Suits Expert'
                    // checked={careerPath.includes('MS Office Suits Expert')}
                    onChange={handleCheckbox}
                  />
                  <label className='ml-2' htmlFor='careerPath'>
                    MS Office Suits Expert
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    name='careerPath'
                    value='MS Office Suits Expert'
                    onChange={handleCheckbox}
                  />
                  <label className='ml-2' htmlFor='careerPath'>
                    MS Office Suits Expert
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    name='careerPath'
                    value='Digital Marketing'
                    onChange={handleCheckbox}
                  />
                  <label className='ml-2' htmlFor='careerPath'>
                    Digital Marketing
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    name='careerPath'
                    value='Wordpress Developer'
                    onChange={handleCheckbox}
                  />
                  <label className='ml-2' htmlFor='careerPath'>
                    Wordpress Developer
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    name='careerPath'
                    value='Voice and Audio Editing'
                    onChange={handleCheckbox}
                  />
                  <label className='ml-2' htmlFor='careerPath'>
                    Voice and Audio Editing
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    name='careerPath'
                    value='Graphic Design'
                    onChange={handleCheckbox}
                  />
                  <label className='ml-2' htmlFor='careerPath'>
                    Graphic Design
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    name='careerPath'
                    value='Mobile App Developer'
                    onChange={handleCheckbox}
                  />
                  <label className='ml-2' htmlFor='careerPath'>
                    Mobile App Developer
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    name='careerPath'
                    value='Software Programming'
                    onChange={handleCheckbox}
                  />
                  <label className='ml-2' htmlFor='careerPath'>
                    Software Programming
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    name='careerPath'
                    value='UI/UX Design'
                    onChange={handleCheckbox}
                  />
                  <label className='ml-2' htmlFor='careerPath'>
                    UI/UX Design
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    name='careerPath'
                    value='Social Media Branding'
                    onChange={handleCheckbox}
                  />
                  <label className='ml-2' htmlFor='careerPath'>
                    Social Media Branding
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    name='careerPath'
                    value='2D and 3D Animation'
                    onChange={handleCheckbox}
                  />
                  <label className='ml-2' htmlFor='careerPath'>
                    2D and 3D Animation
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    name='careerPath'
                    value='Data Analyst'
                    onChange={handleCheckbox}
                  />
                  <label className='ml-2' htmlFor='careerPath'>
                    Data Analyst
                  </label>
                </div>
              </div>
            </div>
            <div className='w-full py-10 flex flex-col items-center gap-4 md:grid md:grid-cols-2 md:gap-10'>
              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor='acquiredSkills'>
                  List Software Skills Acquired
                </label>
                <textarea
                  className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  name='acquiredSkills'
                  id='acquiredSkills'
                  cols='22'
                  rows='2'
                  value={skillsAcquired}
                  onChange={(event) => setSkillsAcquired(event.target.value)}
                  // defaultValue='Figma'
                  placeholder='List all skills acquired (separated by comma)'
                ></textarea>
              </div>

              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor=''>
                  State of Residence
                </label>
                <input
                  className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  type='text'
                  name='state'
                  id='state'
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                  placeholder='Enter current state'
                />
              </div>
              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor='city'>
                  Current City
                </label>
                <input
                  className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  type='text'
                  name='city'
                  id='city'
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  placeholder='Enter current city'
                />
              </div>
              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor='portfolio'>
                  Portfolio Url
                </label>
                <input
                  className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  type='text'
                  name='portfolio'
                  id='portfolio'
                  value={portfolioUrl}
                  onChange={(event) => setPortfolioUrl(event.target.value)}
                  placeholder='Enter portfolio link'
                />
              </div>
            </div>
            <div className='lg:flex gap-4 grid place-content-center md:place-content-start md:grid-cols-2'>
              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor='facebook'>
                  Facebook Url
                </label>
                <input
                  className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  type='text'
                  name='facebook'
                  id='facebook'
                  value={facebookUrl}
                  onChange={(event) => setFacebookUrl(event.target.value)}
                  placeholder='Enter facebook profile link'
                />
              </div>

              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor='instagram'>
                  Instagram Url
                </label>
                <input
                  className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  type='text'
                  name='instagram'
                  id='instagram'
                  value={instagramUrl}
                  onChange={(event) => setInstagramUrl(event.target.value)}
                  placeholder='Enter instagram profile link'
                />
              </div>

              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor='linkedIn'>
                  LinkedIn Url
                </label>
                <input
                  className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  type='text'
                  name='linkedIn'
                  id='linkedIn'
                  value={linkedInUrl}
                  onChange={(event) => setLinkedInUrl(event.target.value)}
                  placeholder='Enter linkedIn profile link'
                />
              </div>
            </div>
            <div className='py-5 md:py-10  md:flex md:gap-10 grid place-content-center md:place-content-start'>
              <div className='flex flex-col items-start'>
                <label className='text-xs' htmlFor='workReady'>
                  Are you available for work?
                </label>
                <select
                  className='py-3 px-10 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  name='workReady'
                  id='workReady'
                  value={workAvailabilty}
                  onChange={(event) => setWorkAvailabilty(event.target.value)}
                >
                  <option value='yes'>Yes</option>
                  <option value='no'>No</option>
                </select>
              </div>

              <div className='flex flex-col items-start '>
                <label className='text-xs' htmlFor='workReadyType'>
                  I can work
                </label>
                <select
                  className='py-3 px-10 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-slate-700'
                  name='workReadyType'
                  id='workReadyType'
                  value={workType}
                  onChange={(event) => setWorkType(event.target.value)}
                >
                  <option value='remotely'>Remotely</option>
                  <option value='onSite'>On Site</option>
                  <option value='hybrid'>Hybrid</option>
                </select>
              </div>
            </div>
            <Button text='Submit' />
          </form>
          <div className='mb-6 text-center md:text-start'>
            <span>
              <p className='text-sm inline-block mr-3 text-primary'>
                Already have an account?
              </p>
              <Link
                className='hover:transition-transform duration-300 hover:ease-in-out hover:text-white hover:underline'
                href='/signIn'
              >
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
