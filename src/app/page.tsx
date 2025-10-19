"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { useWindowSize } from '../hooks/useWindowSize';
import Button from './../components/Button';

import { apiClient } from './../services';
import axios from 'axios';



type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string
}

type UserFake = {
    accountLogin: string
    availableQuantity: number
    createdAt: Date
    loyaltyProgram: string
    offerId: string
    offerStatus: "Ativa" | "Inativo" | "Em Utilizacao";
    offerType: string
}

export default function Home() {


  // const [data, setData] = useState<UserFake[]>([]);
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')
  const { width, height } = useWindowSize();
    
  // useEffect(() => {
  //     const url = '/api';
  //     const fetchData = async () => {
  //       try {
  //         const res = await fetch(`${url}`, { cache: "no-store" })
  //         if (!res.ok) {
  //           throw new Error(`HTTP error! status: ${res.status}`)
  //         }
  //         const result = await res.json()
  //         setData(result.data.offers)
  //       } catch (err) {
  //         console.error('Fetch error:', err)
  //         setError('Failed to load ranking simulation')
  //       } finally {
  //         setLoading(false)
  //       }
  //     }
  //     fetchData()
  //   }, [])


      useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await apiClient.get('/products', {
          signal: controller.signal,
        })
        setData(response.data)

      } catch (err: any) {
        if (err.name === 'AbortError' || axios.isCancel(err)) {
          console.log('Fetch aborted');
          return;
        }
        setError('Failed to load ranking simulation');
      } finally {
        setLoading(false)
      }
    }
    fetchData()
     return () => {
      controller.abort();
    };
  }, [])

  // console.log(data[0]?.createdAt || [])
  // console.log(width)

  const ComponentExample= () => {
    return (
      <h1>test</h1>
    )
  }


     console.log(data)


  return (
    <main className="container">
              <h1>Home Page</h1>
              <p>chamada da API</p>
              {/* {
               data !== null? data.map((item, id)=>{
                  return (
                         <p key={id}>{item.loyaltyProgram}</p>
                  )
               }) : "carregando..."
              } */}

              {
                ComponentExample()
              }

   

    </main>
  );
}
