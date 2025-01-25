import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";

export const BookCheckoutPage = () => {

    const [book, setBook] = useState<BookModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const bookId = (window.location.pathname).split('/')[2];

    useEffect(() => {
        const fetchBook = async () => {
            const baseUrl: string = `http://localhost:8080/api/books/${bookId}`;

            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();

            console.log(responseJson);

            const loadedBook: BookModel = {
                id: responseJson.id,
                title: responseJson.title,
                author: responseJson.author,
                description: responseJson.description,
                copies: responseJson.copies,
                copiesAvailable: responseJson.copiesAvailable,
                category: responseJson.category,
                img: responseJson.img,

            };
            setBook(loadedBook);
            setIsLoading(false);
        };

        fetchBook().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, []);

    return (
        <div>
            <h3>Hi World!</h3>
        </div>
    );
}