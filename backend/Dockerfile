FROM python:3.10-alpine

WORKDIR /app
COPY . /app
RUN pip3 install -r requirements.txt



EXPOSE 5000
CMD ["python3", "app/src/server.py"]

