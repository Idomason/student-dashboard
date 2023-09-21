'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Form({ toggleForm }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
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
    console.log(value);

    if (checked) {
      setCareerPath((careerPath) => [...careerPath, value]);
    } else {
      setCareerPath((careerPath) => [...careerPath]);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('first name:', firstName);
    console.log('last name:', lastName);
    console.log('Career Path:', careerPath);
    console.log('Skills acquired:', skillsAcquired);
    console.log('Portfolio:', portfolioUrl);
    console.log('facebook:', facebookUrl);
    console.log('state:', state);
    console.log('city:', city);
    console.log('workAvailabilty:', workAvailabilty);
    console.log('city:', workType);
  }

  return (
    <>
      {toggleForm === 2 && (
        <section className='w-full h-full bg-bgMain'>
          <div className='md:ml-28 top-24 md:top-16 overflow-hidden antialiased flex flex-col justify-center gap-10 my-20'>
            <div className='md:self-start self-center'>
              <h2 className='text-2xl text-primary font-bold tracking-wide py-4'>
                Profile Setting
              </h2>
              <Image
                src='/assets/white-Joy-removebg-preview.png'
                width={145}
                height={145}
                alt='Passport Photo'
              />
              <small>Maximum file size 1 MB</small>
            </div>
            <div>
              <form
                className='[&>:not(:last-child)]:my-2'
                action=''
                onSubmit={handleSubmit}
              >
                <div className='grid place-content-center md:grid-cols-2 gap-2 md:gap-4'>
                  <div className='flex flex-col items-start'>
                    <label className='text-xs' htmlFor='firstName'>
                      First Name{' '}
                    </label>
                    <input
                      className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
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
                      className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
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
                      className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
                      type='email'
                      name='email'
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder='youremail@mail.com'
                    />
                  </div>
                  <div className='flex flex-col items-start'>
                    <label className='text-xs' htmlFor='bio'>
                      Brief Bio{' '}
                    </label>
                    <textarea
                      className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
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
                      className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
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
                      className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
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
                        className='checked:ring-1 checked:ring-primary'
                        type='checkbox'
                        name='careerPath'
                        id='careerPath'
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
                        id='careerPath'
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
                        id='careerPath'
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
                        id='careerPath'
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
                        id='careerPath'
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
                        id='careerPath'
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
                        id='careerPath'
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
                        id='careerPath'
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
                        id='careerPath'
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
                        id='careerPath'
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
                        id='careerPath'
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
                        id='careerPath'
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
                      className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
                      name='acquiredSkills'
                      id='acquiredSkills'
                      cols='22'
                      rows='2'
                      value={skillsAcquired}
                      onChange={(event) =>
                        setSkillsAcquired(event.target.value)
                      }
                      // defaultValue='Figma'
                      placeholder='List all skills acquired (separated by comma)'
                    ></textarea>
                  </div>

                  <div className='flex flex-col items-start'>
                    <label className='text-xs' htmlFor=''>
                      State of Residence
                    </label>
                    <input
                      className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
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
                      className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
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
                      className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
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
                      className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
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
                      className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
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
                      className='px-2 py-1 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
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
                      className='py-3 px-10 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
                      name='workReady'
                      id='workReady'
                      value={workAvailabilty}
                      onChange={(event) =>
                        setWorkAvailabilty(event.target.value)
                      }
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
                      className='py-3 px-10 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
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

                <div className='pb-10 grid place-items-center md:place-content-start'>
                  <button className='py-3 px-10 border-2 border-primary text-primary rounded-sm hover:bg-primary hover:text-white hover:font-bold hover:cursor-pointer'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
