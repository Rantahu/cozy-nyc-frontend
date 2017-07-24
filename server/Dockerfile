FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir -p /code/server
WORKDIR /code/server
ADD requirements.txt /code/server
RUN pip install -r requirements.txt
ADD . /code/server
