import React from 'react'
import { InlineShareButtons } from 'sharethis-reactjs'

const ShareButtons = ({
  mobile = false,
}) => {
  return (
    <InlineShareButtons
      config={{
        alignment: 'right',
        color: 'white',
        labels: null,
        enabled: true,
        radius: 25,
        networks: (
          mobile
            ? [
              'sharethis'
            ]
            : [
              'facebook',
              'messenger',
              'email',
              'sms',
              'twitter',
              'reddit',
              'pinterest',
              'sharethis',
            ]
        ),
        size: 48,
        padding: 12,
      }}
    />
  )
}

export default ShareButtons
