import React from 'react'
import loader from '../../../assets/images/loader.gif'
import { useSelector } from 'react-redux'

const Result = () => {
  const { signInResp, signInLoading, signInError } = useSelector(
    state => state.user
  )
  return (
    <div>
      {signInLoading ? (
        <img className="w-8 h-8 mb-5 m-auto" src={loader} />
      ) : (
        <span
          className={`text-xl ${
            signInResp ? 'text-red-700' : 'text-green-700'
          }`}
        >
          {signInResp.user ? (
            <span className="text-green-700">{`Logged User ${signInResp.user}`}</span>
          ) : (
            <>
              {signInResp && !signInResp.user ? (
                <span className="text-red-700">{signInResp}</span>
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

export default Result
