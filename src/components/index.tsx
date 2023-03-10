import { Buildings, Link, MapPin, Moon, Sun, TwitterLogo } from 'phosphor-react'
import { MagnifyingGlass } from 'phosphor-react'
import { Container, Content, Header, Card, Search, DatasGit } from './styled'
import Github from '../assets/github.png'
import { useContext, useState } from 'react';
import dayjs from 'dayjs'

import { api } from '../services/api';

import usePersistedState from '../utils/usePersistedState';
import { DefaultTheme, ThemeContext } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import Loading from 'react-loading';

interface Props {
    handleTheme(): void;
}

interface UserProps {
    name: string;
    login: string;
    created_at: Date;
    avatar_url: string;
    public_repos: number;
    followers: number;
    following: number;
    location: string;
    blog: string;
    twitter_username: string;
    company: string;
}

export function SearchGit({handleTheme}: Props) {
    const [userName, setUserName] = useState('')
    const [login, setlogin] = useState('octocat')
    const [name, setName] = useState('The Octocat')
    const [avatar, setAvatar] = useState(Github)
    const [createdAt, setCreatedAt] = useState('Join 25 jun 2011')
    const [publicRepos, setPublicRepos] = useState(8)
    const [followers, setFollowers] = useState(3938)
    const [following, setFollowing] = useState(9)
    const [location, setLocation] = useState('San Francisco"')
    const [blog, setBlog] = useState('Http://github.blog')
    const [twitterUsername, settwitterUsername] = useState('Not Avaliable')
    const [company, setCompany] = useState('agithub')

    const {colors, title} = useContext(ThemeContext);

    const handleSearch: any = () => {
        api.get<UserProps>(`/${userName}`)
            .then((res: any) => {
                setName(res.data.name)
                setAvatar(res.data.avatar_url)
                setPublicRepos(res.data.public_repos)
                setFollowers(res.data.followers)
                setFollowing(res.data.following)
                setLocation(res.data.location)
                setBlog(res.data.blog)
                settwitterUsername(res.data.twitter_username)
                setCompany(res.data.company)
                setlogin(res.data.login)
                setCreatedAt(res.data.created_at)
            })
    }

    const day = dayjs(createdAt).format('DD')
    const month = dayjs(createdAt).format('MMM')
    const year = dayjs(createdAt).format('YYYY')


    return (
            <Container>
                <Content>
                    <Header 
                        
                    >
                        <h3>devfinder</h3>
                        {title === 'light' ?
                            <div onClick={handleTheme}>
                                <p>DARK</p>
                                <Moon size={26} />  
                            </div>
                            :
                            <div onClick={handleTheme}>
                                <p>LIGHT</p>
                                <Sun size={26} />
                            </div>
                        }                        
                    </Header>
                    
                    <Search>
                        <MagnifyingGlass size={32} />
                        <input
                            type="text"
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder='Search GitHub username..' />

                        <button type='button' onClick={handleSearch}>
                            Search
                        </button>
                    </Search>
                    <Card>
                        <div>
                            <img
                                src={avatar}
                            />

                            <div>
                                <h1>{name}</h1>
                                <span className='profile'>@{login}</span>

                                <div className='bio'>
                                    <span>This profile has no bio</span>
                                </div>
                            </div>

                            <strong className='data'>Joined {day} {month} {year}</strong>
                        </div>

                        <div className='info'>
                            <div>
                                <div className='repos infoData'>
                                    <span>Repos</span>
                                    <strong>{publicRepos}</strong>
                                </div>
                                <div className='followers infoData'>
                                    <span>Followers</span>
                                    <strong>{followers}</strong>
                                </div>
                                <div className='following infoData'>
                                    <span>Following</span>
                                    <strong>{following}</strong>
                                </div>
                            </div>
                        </div>

                        <DatasGit>
                            <div className='datasgithub'>
                                <div>
                                    <MapPin size={22} />
                                    <span>{location}</span>
                                </div>
                                <div className='gitstyle'>
                                    <TwitterLogo size={22} />
                                    <span>{twitterUsername === null ? 'Not Avaliable' : twitterUsername}</span>

                                </div>
                                <div>
                                    <Link size={22} />
                                    <span>
                                        <a href={blog} target="_blank">
                                            {blog}
                                        </a>
                                    </span>
                                </div>
                                <div className='gitstyle'>
                                    <Buildings size={22} />
                                    <span>{company}</span>
                                </div>
                            </div>
                        </DatasGit>
                    </Card>

                </Content>

            </Container>
    )
}