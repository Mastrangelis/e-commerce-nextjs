'use client'

import React, { Fragment, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { Message } from '../../../_components/Message'
import { useCart } from '../../../_providers/Cart'
import { useTheme } from '../../../_providers/Theme'

import classes from './index.module.scss'

export const OrderConfirmationPage: React.FC<{}> = () => {
  const { theme } = useTheme()
  const searchParams = useSearchParams()
  const orderID = searchParams.get('order_id')
  const error = searchParams.get('error')

  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div>
      {error ? (
        <Fragment>
          <Message error={error} />
          <p>
            {`Your payment was successful but there was an error processing your order. Please contact us to resolve this issue.`}
          </p>
          <div className={classes.actions}>
            <Button href="/account" label="View account" appearance="primary" />
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/orders`}
              label="View all orders"
              appearance="secondary"
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1>Thank you for your order!</h1>
          <p>
            Your order has been confirmed. You will receive an email confirmation shortly. Your
            order ID is <strong>{orderID}</strong>
          </p>
          <div className={classes.actions}>
            <Button
              className={classes.order}
              href={`/account/orders/${orderID}`}
              label="View order"
              appearance={theme === 'dark' ? 'primary' : 'secondary'}
            />
            <Button
              className={classes.orders}
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/account/orders`}
              label="View all orders"
              appearance={theme === 'dark' ? 'secondary' : 'primary'}
            />
          </div>
        </Fragment>
      )}
    </div>
  )
}
