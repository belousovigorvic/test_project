import React from 'react'
import loader from '../../../assets/images/loader.gif'
import { useSelector } from 'react-redux'

const ResultLogin = () => {
  const { signInResponse, signInLoading, signInError } = useSelector(
    state => state.user
  )
  return (
    <div>
      {signInLoading ? (
        <img className="w-8 h-8 mb-5 m-auto" src={loader} />
      ) : (
        <span
          className={`text-xl ${
            signInResponse ? 'text-red-700' : 'text-green-700'
          }`}
        >
          {signInResponse.user ? (
            <span className="text-green-700">{`Logged User ${signInResponse.user}`}</span>
          ) : (
            <>
              {signInResponse && !signInResponse.user ? (
                <span className="text-red-700">{signInResponse}</span>
              ) : (
                ''
              )}
              {signInError ? (
                <span className="text-red-700">{signInError}</span>
              ) : (
                ''
              )}
            </>
          )}
        </span>
      )}
    </div>
  )
}

export default ResultLogin
