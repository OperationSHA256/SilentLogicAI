import React from 'react';
import { useProducts, useContactSubmit, useNewsletterSubscribe } from '../hooks/useApi';
import toast from 'react-hot-toast';

export default function ExampleUsage() {
  // Fetch products
  const { data: products, isLoading, error } = useProducts();
  
  // Contact form submission
  const { mutate: submitContact, isLoading: isSubmitting } = useContactSubmit();
  
  // Newsletter subscription
  const { mutate: subscribeNewsletter } = useNewsletterSubscribe();

  // Example contact form submission
  const handleContactSubmit = async (formData: any) => {
    try {
      await submitContact(formData, {
        onSuccess: () => {
          toast.success('Message sent successfully!');
        },
        onError: (error) => {
          toast.error('Failed to send message');
          console.error('Error:', error);
        }
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Example newsletter subscription
  const handleNewsletterSubmit = async (email: string) => {
    try {
      await subscribeNewsletter(email, {
        onSuccess: () => {
          toast.success('Successfully subscribed!');
        },
        onError: () => {
          toast.error('Failed to subscribe');
        }
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="p-4">
      <h1>API Usage Example</h1>
      
      {/* Display Products */}
      <div className="mt-4">
        <h2>Products</h2>
        <div className="grid grid-cols-3 gap-4">
          {products?.data.map((product: any) => (
            <div key={product.id} className="border p-4">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Example */}
      <div className="mt-4">
        <h2>Contact Form</h2>
        <button
          onClick={() => handleContactSubmit({
            name: 'John Doe',
            email: 'john@example.com',
            message: 'Hello!'
          })}
          disabled={isSubmitting}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Newsletter Subscription Example */}
      <div className="mt-4">
        <h2>Newsletter</h2>
        <button
          onClick={() => handleNewsletterSubmit('test@example.com')}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
}