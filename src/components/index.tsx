import { Buildings, Link, MapPin, Sun, TwitterLogo } from 'phosphor-react'
import {MagnifyingGlass} from 'phosphor-react'
import {Container, Content, Header, Card, Search, DatasGit} from './styled'
import Github from '../assets/github.png'
import { useEffect, useState } from 'react';
import { api } from '../services/api';

interface UserProps {
    name: string;
    login: string;
    avatar_url: string;
    created_at: Date;
    public_repos: number;
    followers: number;
    following: number;
    location: string;
    blog: string;
    twitter_username: string;
    company: string;
}

export function SearchGit({}: UserProps) {
    const [userName, setUserName] = useState('')
    const [login, setlogin] = useState('@octocat')
    const [name, setName] = useState('The Octocat')
    const [avatar, setAvatar] = useState(Github)
    const [createdAt, setCreatedAt] = useState('Join 25 jun 2011')
    const [publicRepos, setPublicRepos] = useState(8)
    const [followers, setFollowers] = useState(3938)
    const [following, setFollowing] = useState(9)
    const [location, setLocation] = useState('Fortaleza')
    const [blog, setBlog] = useState('Http://github.blog')
    const [twitterUsername, settwitterUsername] = useState('Not Avaliable')
    const [company, setCompany] = useState('agithub')
    

    const handleSearch = ()  => {
        api.get<UserProps>(`/${userName}`)
            .then((res) => {
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
            })
    }

    return (
        <Container>
            <Content>
                <Header>
                    <h3>devfinder</h3>
                    <div>
                       <p>LIGHT</p>
                        <Sun size={26} />
                    </div>
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

                        <strong className='data'>Join 25 jun 2011</strong>
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
                                <span>{blog}</span>
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