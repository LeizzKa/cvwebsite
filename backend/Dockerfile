FROM python:3.10-alpine

COPY . /app
WORKDIR /app
RUN pip3 install -r requirements.txt



EXPOSE 5000
ENTRYPOINT [ "python3" ]
CMD ["backend/src/server.py"]

